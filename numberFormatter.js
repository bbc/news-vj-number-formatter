define(function () {
    var getIntegerAndFractional = function (number) {
        var splitNumber = number.split('.');
        return {
            integer: splitNumber[0],
            fractional: splitNumber[1] || ''
        };
    };

    var formatNumberWithSeperators = function (number, integerSeperatorSign, fractionSeperator) {
        var splitNumber = getIntegerAndFractional(number);
        var formattedInteger = splitNumber.integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + integerSeperatorSign);
        var numberHasFractional = (splitNumber.fractional.length > 0);
        var fractionalSign = (numberHasFractional) ? fractionSeperator : '';

        return formattedInteger + fractionalSign + splitNumber.fractional;
    };

    var commonSeperatorFormats = {
        'commasAndDecimals': function (number) {
            return formatNumberWithSeperators(number, ',', '.');
        },
        'spacesAndCommas': function (number) {
            return formatNumberWithSeperators(number, ' ', ',');
        },
        'decimalsAndCommas': function (number) {
            return formatNumberWithSeperators(number, '.', ',');
        }
    };

    var customSeperatorFormats = {
        'arabic': function (number) {
           return formatNumberWithSeperators(number, '', ',');
        },
        'persian': function (number) {
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
        'hindi': function (number) {
            var splitNumber = getIntegerAndFractional(number);
            var integerPart = splitNumber.integer;
            var formattedIntegerPart = integerPart;
            var numberHasFractional = (splitNumber.fractional.length > 0);
            var fractionalSign = (numberHasFractional) ? '.' : '';

            if (integerPart.length > 3) {
                var lastThreeDigits = integerPart.slice(-3);
                var remainingDigits = integerPart.slice(0, -3);
                var formattedRemainingDigits;

                formattedRemainingDigits = remainingDigits.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,');
                formattedIntegerPart = formattedRemainingDigits + ',' + lastThreeDigits;
            }

            return formattedIntegerPart + fractionalSign + splitNumber.fractional;
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
    };

    var serviceSeperatorFormats = {
        english:           commonSeperatorFormats.commasAndDecimals,
        afrique:           commonSeperatorFormats.decimalsAndCommas,
        arabic:            customSeperatorFormats.arabic,
        azeri:             commonSeperatorFormats.spacesAndCommas,
        bengali:           commonSeperatorFormats.commasAndDecimals,
        brasil:            commonSeperatorFormats.spacesAndCommas,
        burmese:           commonSeperatorFormats.commasAndDecimals,
        chinese:           commonSeperatorFormats.commasAndDecimals,
        chinese_simp:      commonSeperatorFormats.commasAndDecimals,
        chinese_trad:      commonSeperatorFormats.commasAndDecimals,
        ukchina_simp:      commonSeperatorFormats.commasAndDecimals,
        ukchina_trad:      commonSeperatorFormats.commasAndDecimals,
        french:            commonSeperatorFormats.spacesAndCommas,
        gahuza:            commonSeperatorFormats.decimalsAndCommas,
        hausa:             commonSeperatorFormats.commasAndDecimals,
        hindi:             customSeperatorFormats.hindi,
        indonesia:         commonSeperatorFormats.decimalsAndCommas,
        indonesian:        commonSeperatorFormats.decimalsAndCommas,
        kyrgyz:            commonSeperatorFormats.spacesAndCommas,
        marathi:           customSeperatorFormats.hindi,
        mundo:             commonSeperatorFormats.decimalsAndCommas,
        news:              commonSeperatorFormats.commasAndDecimals,
        nepali:            customSeperatorFormats.nepali,
        persian:           customSeperatorFormats.persian,
        pashto:            commonSeperatorFormats.commasAndDecimals,
        portuguese:        commonSeperatorFormats.decimalsAndCommas,
        russian:           commonSeperatorFormats.spacesAndCommas,
        sinhala:           commonSeperatorFormats.commasAndDecimals,
        sinhali:           commonSeperatorFormats.commasAndDecimals,
        somali:            commonSeperatorFormats.commasAndDecimals,
        spanish:           commonSeperatorFormats.decimalsAndCommas,
        swahili:           commonSeperatorFormats.commasAndDecimals,
        tamil:             commonSeperatorFormats.commasAndDecimals,
        thai:              commonSeperatorFormats.commasAndDecimals,
        turkish:           commonSeperatorFormats.decimalsAndCommas,
        urdu:              commonSeperatorFormats.commasAndDecimals,
        ukrainian:         commonSeperatorFormats.spacesAndCommas,
        uzbek:             commonSeperatorFormats.spacesAndCommas,
        vietnamese:        commonSeperatorFormats.decimalsAndCommas
    };

    var percentageFormatIsAppend = {
        english: true,
        afrique: true,
        arabic: true,
        azeri: true,
        bengali: true,
        brasil: true,
        burmese: true,
        chinese: true,
        chinese_simp: true,
        chinese_trad: true,
        ukchina_simp: true,
        ukchina_trad: true,
        french: true,
        gahuza: true,
        hausa: true,
        hindi: true,
        indonesia: true,
        indonesian: true,
        kyrgyz: true,
        marathi: true,
        mundo: true,
        news: true,
        persian: false,
        nepali: true,
        pashto: true,
        portuguese: true,
        russian: true,
        sinhala: true,
        sinhali: true,
        somali: true,
        spanish: true,
        swahili: true,
        tamil: true,
        thai: true,
        turkish: false,
        urdu: false,
        ukrainian: true,
        uzbek: true,
        vietnamese: true
    };

    var isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    var NumberFormatter = {
        format: function (service, number) {
            var numberAsString = isNumeric(number) ? number.toString() : '';
            var formattedNumber;

            if (serviceSeperatorFormats[service]) {
                formattedNumber = serviceSeperatorFormats[service](numberAsString);
            } else {
                formattedNumber = numberAsString;
            }

            return formattedNumber;
        },
        percentageFormat: function (service, number) {
            var isAppend = percentageFormatIsAppend[service] || percentageFormatIsAppend[service] === undefined;
            var formattedNumber = NumberFormatter.format(service, number);
            var percentageFormattedNumber;
            if (isAppend) {
                percentageFormattedNumber = formattedNumber + '%';
            } else {
                percentageFormattedNumber = '%' + formattedNumber;
            }

            return percentageFormattedNumber;
        }
    };

    return NumberFormatter;
});
