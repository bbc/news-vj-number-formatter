const getIntegerAndFractional = function (number) {
    const splitNumber = number.split('.');
    return {
        integer: splitNumber[0],
        fractional: splitNumber[1] || '',
    };
};

const formatNumberWithSeperators = function (number, integerSeperatorSign, fractionSeperator) {
    const splitNumber = getIntegerAndFractional(number);
    const formattedInteger = splitNumber.integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${integerSeperatorSign}`);
    const numberHasFractional = (splitNumber.fractional.length > 0);
    const fractionalSign = (numberHasFractional) ? fractionSeperator : '';

    return formattedInteger + fractionalSign + splitNumber.fractional;
};

const commonSeperatorFormats = {
    commasAndDecimals: function (number) {
        return formatNumberWithSeperators(number, ',', '.');
    },
    spacesAndCommas: function (number) {
        return formatNumberWithSeperators(number, ' ', ',');
    },
    decimalsAndCommas: function (number) {
        return formatNumberWithSeperators(number, '.', ',');
    },
};

const customSeperatorFormats = {
    arabic: function (number) {
        return formatNumberWithSeperators(number, '', ',');
    },
    persian: function (number) {
        const persianArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '،'];
        let outputStr = '';

        const numStr = number.toString();

        for (let i = 0; i < numStr.length; i++) {
            // for some reason . and - got caught up in the lower conditions
            // and failed in a previous project.
            if (numStr[i] === '.') {
                outputStr += '.';
            }
            else if (numStr[i] === '-') {
                outputStr += '-';
            }
            else if (!Number.isNaN(numStr[i])) {
                outputStr += persianArray[numStr[i]];
            }
            else if (numStr[i] === ',') {
                outputStr += persianArray[10];
            }
            else {
                // try and catch other non-number characters.
                outputStr += numStr[i];
            }
        }

        return outputStr;
    },
    nepali: function (number) {
        const nums = {
            0: '०',
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
        };

        const numStr = formatNumberWithSeperators(number, ',', '.').toString();

        const arrNumNe = numStr.toString().split('').map((ch) => {
            if (ch === '.' || ch === ',') {
                return ch;
            }
            return nums[Number(ch)];
        });
        return arrNumNe.join('');
    },
    hindi: function (number) {
        const splitNumber = getIntegerAndFractional(number);
        const integerPart = splitNumber.integer;
        let formattedIntegerPart = integerPart;
        const numberHasFractional = (splitNumber.fractional.length > 0);
        const fractionalSign = (numberHasFractional) ? '.' : '';

        if (integerPart.length > 3) {
            const lastThreeDigits = integerPart.slice(-3);
            const remainingDigits = integerPart.slice(0, -3);
            const formattedRemainingDigits = remainingDigits.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,');
            formattedIntegerPart = `${formattedRemainingDigits},${lastThreeDigits}`;
        }

        return formattedIntegerPart + fractionalSign + splitNumber.fractional;
    },
    bengali: function (number) {
        const nums = {
            0: '০',
            1: '১',
            2: '২',
            3: '৩',
            4: '৪',
            5: '৫',
            6: '৬',
            7: '৭',
            8: '৮',
            9: '৯',
        };

        const numStr = formatNumberWithSeperators(number, ',', '.').toString();

        const arrNumNe = numStr.toString().split('').map((ch) => {
            if (ch === '.' || ch === ',') {
                return ch;
            }
            return nums[Number(ch)];
        });
        return arrNumNe.join('');
    },
};

const serviceSeperatorFormats = {
    afaanoromoo: commonSeperatorFormats.commasAndDecimals,
    afrique: commonSeperatorFormats.spacesAndCommas,
    amharic: commonSeperatorFormats.commasAndDecimals,
    arabic: customSeperatorFormats.arabic,
    azeri: commonSeperatorFormats.spacesAndCommas,
    bengali: customSeperatorFormats.bengali,
    brasil: commonSeperatorFormats.decimalsAndCommas,
    burmese: commonSeperatorFormats.commasAndDecimals,
    chinese_simp: commonSeperatorFormats.commasAndDecimals,
    chinese_trad: commonSeperatorFormats.commasAndDecimals,
    chinese: commonSeperatorFormats.commasAndDecimals,
    cymrufyw: commonSeperatorFormats.commasAndDecimals,
    english: commonSeperatorFormats.commasAndDecimals,
    french: commonSeperatorFormats.spacesAndCommas,
    gahuza: commonSeperatorFormats.decimalsAndCommas,
    greatlakes: commonSeperatorFormats.commasAndDecimals,
    gujarati: customSeperatorFormats.hindi,
    hausa: commonSeperatorFormats.commasAndDecimals,
    hindi: customSeperatorFormats.hindi,
    igbo: commonSeperatorFormats.commasAndDecimals,
    indonesia: commonSeperatorFormats.decimalsAndCommas,
    indonesian: commonSeperatorFormats.decimalsAndCommas,
    japanese: commonSeperatorFormats.commasAndDecimals,
    korean: commonSeperatorFormats.commasAndDecimals,
    kyrgyz: commonSeperatorFormats.spacesAndCommas,
    marathi: customSeperatorFormats.hindi,
    mundo: commonSeperatorFormats.decimalsAndCommas,
    naidheachdan: commonSeperatorFormats.commasAndDecimals,
    nepali: customSeperatorFormats.nepali,
    news: commonSeperatorFormats.commasAndDecimals,
    pashto: commonSeperatorFormats.commasAndDecimals,
    persian: customSeperatorFormats.persian,
    pidgin: commonSeperatorFormats.commasAndDecimals,
    portuguese: commonSeperatorFormats.decimalsAndCommas,
    punjabi: commonSeperatorFormats.decimalsAndCommas,
    russian: commonSeperatorFormats.spacesAndCommas,
    serbian_cyr: commonSeperatorFormats.spacesAndCommas,
    serbian_lat: commonSeperatorFormats.spacesAndCommas,
    serbian: commonSeperatorFormats.spacesAndCommas,
    sinhala: commonSeperatorFormats.commasAndDecimals,
    sinhali: commonSeperatorFormats.commasAndDecimals,
    somali: commonSeperatorFormats.commasAndDecimals,
    spanish: commonSeperatorFormats.decimalsAndCommas,
    swahili: commonSeperatorFormats.commasAndDecimals,
    tamil: commonSeperatorFormats.commasAndDecimals,
    telugu: commonSeperatorFormats.decimalsAndCommas,
    thai: commonSeperatorFormats.commasAndDecimals,
    tigrinya: commonSeperatorFormats.commasAndDecimals,
    turkce: commonSeperatorFormats.decimalsAndCommas,
    turkish: commonSeperatorFormats.decimalsAndCommas,
    ukchina_simp: commonSeperatorFormats.commasAndDecimals,
    ukchina_trad: commonSeperatorFormats.commasAndDecimals,
    ukchina: commonSeperatorFormats.commasAndDecimals,
    ukrainian: commonSeperatorFormats.spacesAndCommas,
    urdu: commonSeperatorFormats.commasAndDecimals,
    uzbek: commonSeperatorFormats.spacesAndCommas,
    vietnamese: commonSeperatorFormats.decimalsAndCommas,
    welsh: commonSeperatorFormats.commasAndDecimals,
    yoruba: commonSeperatorFormats.commasAndDecimals,
    zhongwen_simp: commonSeperatorFormats.commasAndDecimals,
    zhongwen_trad: commonSeperatorFormats.commasAndDecimals,
    zhongwen: commonSeperatorFormats.commasAndDecimals,
};

const percentageFormatIsAppend = {
    afaanoromoo: true,
    afrique: true,
    amharic: true,
    arabic: false,
    azeri: true,
    bengali: true,
    brasil: true,
    burmese: true,
    chinese_simp: true,
    chinese_trad: true,
    chinese: true,
    cymrufyw: true,
    english: true,
    french: true,
    gahuza: true,
    greatlakes: true,
    gujarati: true,
    hausa: true,
    hindi: true,
    igbo: true,
    indonesia: true,
    indonesian: true,
    japanese: true,
    korean: true,
    kyrgyz: true,
    marathi: true,
    mundo: true,
    naidheachdan: true,
    nepali: true,
    news: true,
    pashto: true,
    persian: false,
    pidgin: true,
    portuguese: true,
    punjabi: true,
    russian: true,
    serbian_cyr: true,
    serbian_lat: true,
    serbian: true,
    sinhala: true,
    sinhali: true,
    somali: true,
    spanish: true,
    swahili: true,
    tamil: true,
    telugu: true,
    thai: true,
    tigrinya: true,
    turkce: false,
    turkish: false,
    ukchina_simp: true,
    ukchina_trad: true,
    ukchina: true,
    ukrainian: true,
    urdu: false,
    uzbek: true,
    vietnamese: true,
    welsh: true,
    yoruba: true,
    zhongwen_simp: true,
    zhongwen_trad: true,
    zhongwen: true,
};

const isNumeric = (n) => !Number.isNaN(parseFloat(n)) && Number.isFinite(n);

const stringFromNumber = (number, decimalPlaces) => {
    if (isNumeric(number)) {
        return decimalPlaces === null ? number.toString() : number.toFixed(decimalPlaces).toString();
    }
    return '';
};

const NumberFormatter = {
    format: (service, number, decimalPlaces = null) => {
        const numberAsString = stringFromNumber(number, decimalPlaces);
        const formattedNumber = serviceSeperatorFormats[service] ?
            serviceSeperatorFormats[service](numberAsString) :
            numberAsString;

        return formattedNumber;
    },
    percentageFormat: (service, number) => {
        const isAppend = percentageFormatIsAppend[service] || percentageFormatIsAppend[service] === undefined;
        const formattedNumber = NumberFormatter.format(service, number);
        const percentageFormattedNumber = isAppend ?
            `${formattedNumber}%` :
            `%${formattedNumber}`;

        return percentageFormattedNumber;
    },
};

module.exports = NumberFormatter;
