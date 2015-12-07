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
        'hindi': function (number) {
            var splitNumber = getIntegerAndFractional(number);
            var integerPart = splitNumber.integer;
            var formattedIntegerPart = integerPart;
            var numberHasFractional = (splitNumber.fractional.length > 0);
            var fractionalSign = (numberHasFractional) ? '.' : '';

            if (integerPart.length > 2) {
                var lastTwoDigits = integerPart.slice(-2);
                var remainingDigits = integerPart.slice(0, -2);
                remainingDigits = formatNumberWithSeperators(remainingDigits, ',', '');
                formattedIntegerPart = remainingDigits + ',' + lastTwoDigits;
            }
            
            return formattedIntegerPart + fractionalSign + splitNumber.fractional;
        }
    };

    var serviceSeperatorFormats = {
        english: commonSeperatorFormats.commasAndDecimals,
        arabic: customSeperatorFormats.arabic,
        azeri: commonSeperatorFormats.spacesAndCommas,
        bengali: commonSeperatorFormats.commasAndDecimals,
        burmese: commonSeperatorFormats.commasAndDecimals,
        chinese_simp: commonSeperatorFormats.commasAndDecimals,
        chinese_trad: commonSeperatorFormats.commasAndDecimals,
        ukchina_simp: commonSeperatorFormats.commasAndDecimals,
        ukchina_trad: commonSeperatorFormats.commasAndDecimals,
        french: commonSeperatorFormats.spacesAndCommas,
        gahuza: commonSeperatorFormats.decimalsAndCommas,
        hausa: commonSeperatorFormats.commasAndDecimals,
        hindi: customSeperatorFormats.hindi,
        indonesia: commonSeperatorFormats.decimalsAndCommas,
        kyrgyz: commonSeperatorFormats.spacesAndCommas,
        pashto: commonSeperatorFormats.commasAndDecimals,
        portuguese: commonSeperatorFormats.decimalsAndCommas,
        russian: commonSeperatorFormats.spacesAndCommas,
        sinhala: commonSeperatorFormats.commasAndDecimals,
        somali: commonSeperatorFormats.commasAndDecimals,
        spanish: commonSeperatorFormats.spacesAndCommas,
        swahili: commonSeperatorFormats.commasAndDecimals,
        tamil: commonSeperatorFormats.commasAndDecimals,
        thai: commonSeperatorFormats.commasAndDecimals,
        turkish: commonSeperatorFormats.commasAndDecimals,
        urdu: commonSeperatorFormats.commasAndDecimals,
        ukrainian: commonSeperatorFormats.spacesAndCommas,
        uzbek: commonSeperatorFormats.spacesAndCommas,
        vietnamese: commonSeperatorFormats.decimalsAndCommas
    }; 

    return {
        format: function (service, number) {
            var numberAsString = number.toString();
            var formattedNumber;

            if (serviceSeperatorFormats[service]) {
                formattedNumber = serviceSeperatorFormats[service](numberAsString);
            } else {
                formattedNumber = numberAsString;
            }

            return formattedNumber;
        }
    };
});
