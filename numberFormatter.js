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

            if (integerPart.length > 3) {
                var lastThreeDigits = integerPart.slice(-3);
                var remainingDigits = integerPart.slice(0, -3);
                var formattedRemainingDigits;

                formattedRemainingDigits = remainingDigits.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,');
                formattedIntegerPart = formattedRemainingDigits + ',' + lastThreeDigits;
            }

            return formattedIntegerPart + fractionalSign + splitNumber.fractional;
        }
    };

    var serviceSeperatorFormats = function(service){
        switch(service){
            case 'arabic':
                return customSeperatorFormats.arabic;
            break;
            case 'hindi':
                return customSeperatorFormats.hindi;
            break;
            case 'azeri':
            case 'brasil':
            case 'french':
            case 'kyrgyz':
            case 'russian':
            case 'ukrainian':
            case 'uzbek':
                return commonSeperatorFormats.spacesAndCommas;
            break;
            case 'gahuza':
            case 'indonesia':
            case 'indonesian':
            case 'mundo':
            case 'portuguese':
            case 'spanish':
            case 'turkish':
            case 'vietnamese':
                return commonSeperatorFormats.spacesAndCommas;
            break;
            default:
                return commonSeperatorFormats.commasAndDecimals;
            break;
        }
    };

    var percentageFormatIsAppend = function(service){
        switch(service){
            case 'persian':
            case 'turkish':
                return false;
            break;
        }
        return true;
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
            var isAppend = percentageFormatIsAppend(service);
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
