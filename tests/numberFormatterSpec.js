define(['NumberFormatter'],  function (NumberFormatter) {

    describe('Number formatter', function () {
        it('should return the passed in number as a string when no matching service is found', function () {
            expect(NumberFormatter.format('non-matching', 14562.65)).toBe('14562.65');
            expect(NumberFormatter.format('non-matching', 546)).toBe('546');
            expect(NumberFormatter.format('non-matching', 123456)).toBe('123456');
            expect(NumberFormatter.format('non-matching', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('non-matching', 1234567)).toBe('1234567');
            expect(NumberFormatter.format('non-matching', 100000000)).toBe('100000000');
        });

        it('should format numbers using the BBC English style', function () {
            expect(NumberFormatter.format('english', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('english', 546)).toBe('546');
            expect(NumberFormatter.format('english', 123456)).toBe('123,456');
            expect(NumberFormatter.format('english', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('english', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('english', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC Arabic style', function () {
            expect(NumberFormatter.format('arabic', 14562.65)).toBe('14562,65');
            expect(NumberFormatter.format('arabic', 546)).toBe('546');
            expect(NumberFormatter.format('arabic', 123456)).toBe('123456');
            expect(NumberFormatter.format('arabic', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('arabic', 1234567)).toBe('1234567');
            expect(NumberFormatter.format('arabic', 100000000)).toBe('100000000');
        });

        it('should format numbers using the BBC Azeri style', function () {
            expect(NumberFormatter.format('azeri', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('azeri', 546)).toBe('546');
            expect(NumberFormatter.format('azeri', 123456)).toBe('123 456');
            expect(NumberFormatter.format('azeri', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('azeri', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('azeri', 100000000)).toBe('100 000 000');
        });
        
        it('should format numbers using the BBC Bengali style', function () {
            expect(NumberFormatter.format('bengali', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('bengali', 546)).toBe('546');
            expect(NumberFormatter.format('bengali', 123456)).toBe('123,456');
            expect(NumberFormatter.format('bengali', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('bengali', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('bengali', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC Burmese style', function () {
            expect(NumberFormatter.format('burmese', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('burmese', 546)).toBe('546');
            expect(NumberFormatter.format('burmese', 123456)).toBe('123,456');
            expect(NumberFormatter.format('burmese', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('burmese', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('burmese', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Chinese simple style', function () {
            expect(NumberFormatter.format('chinese_simp', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('chinese_simp', 546)).toBe('546');
            expect(NumberFormatter.format('chinese_simp', 123456)).toBe('123,456');
            expect(NumberFormatter.format('chinese_simp', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('chinese_simp', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('chinese_simp', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Chinese traditional style', function () {
            expect(NumberFormatter.format('chinese_trad', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('chinese_trad', 546)).toBe('546');
            expect(NumberFormatter.format('chinese_trad', 123456)).toBe('123,456');
            expect(NumberFormatter.format('chinese_trad', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('chinese_trad', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('chinese_trad', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC UK Chinese simple style', function () {
            expect(NumberFormatter.format('ukchina_simp', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('ukchina_simp', 546)).toBe('546');
            expect(NumberFormatter.format('ukchina_simp', 123456)).toBe('123,456');
            expect(NumberFormatter.format('ukchina_simp', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('ukchina_simp', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('ukchina_simp', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC UK Chinese traditional style', function () {
            expect(NumberFormatter.format('ukchina_trad', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('ukchina_trad', 546)).toBe('546');
            expect(NumberFormatter.format('ukchina_trad', 123456)).toBe('123,456');
            expect(NumberFormatter.format('ukchina_trad', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('ukchina_trad', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('ukchina_trad', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC French style', function () {
            expect(NumberFormatter.format('french', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('french', 546)).toBe('546');
            expect(NumberFormatter.format('french', 123456)).toBe('123 456');
            expect(NumberFormatter.format('french', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('french', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('french', 100000000)).toBe('100 000 000');
        });

        it('should format numbers using the BBC Gahuza style', function () {
            expect(NumberFormatter.format('gahuza', 14562.65)).toBe('14.562,65');
            expect(NumberFormatter.format('gahuza', 546)).toBe('546');
            expect(NumberFormatter.format('gahuza', 123456)).toBe('123.456');
            expect(NumberFormatter.format('gahuza', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('gahuza', 1234567)).toBe('1.234.567');
            expect(NumberFormatter.format('gahuza', 100000000)).toBe('100.000.000');
        });
        
        it('should format numbers using the BBC Hausa style', function () {
            expect(NumberFormatter.format('hausa', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('hausa', 546)).toBe('546');
            expect(NumberFormatter.format('hausa', 123456)).toBe('123,456');
            expect(NumberFormatter.format('hausa', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('hausa', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('hausa', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Hindi style', function () {
            expect(NumberFormatter.format('hindi', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('hindi', 546)).toBe('546');
            expect(NumberFormatter.format('hindi', 123456)).toBe('1,23,456');
            expect(NumberFormatter.format('hindi', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('hindi', 1234567)).toBe('12,34,567');
            expect(NumberFormatter.format('hindi', 100000000)).toBe('10,00,00,000');
        });

        it('should format numbers using the BBC Indonesia style', function () {
            expect(NumberFormatter.format('indonesia', 14562.65)).toBe('14.562,65');
            expect(NumberFormatter.format('indonesia', 546)).toBe('546');
            expect(NumberFormatter.format('indonesia', 123456)).toBe('123.456');
            expect(NumberFormatter.format('indonesia', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('indonesia', 1234567)).toBe('1.234.567');
            expect(NumberFormatter.format('indonesia', 100000000)).toBe('100.000.000');
        });

        it('should format numbers using the BBC Kyrgyz style', function () {
            expect(NumberFormatter.format('kyrgyz', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('kyrgyz', 546)).toBe('546');
            expect(NumberFormatter.format('kyrgyz', 123456)).toBe('123 456');
            expect(NumberFormatter.format('kyrgyz', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('kyrgyz', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('kyrgyz', 100000000)).toBe('100 000 000');
        });
        
        it('should format numbers using the BBC Pashto style', function () {
            expect(NumberFormatter.format('pashto', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('pashto', 546)).toBe('546');
            expect(NumberFormatter.format('pashto', 123456)).toBe('123,456');
            expect(NumberFormatter.format('pashto', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('pashto', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('pashto', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Portuguese style', function () {
            expect(NumberFormatter.format('portuguese', 14562.65)).toBe('14.562,65');
            expect(NumberFormatter.format('portuguese', 546)).toBe('546');
            expect(NumberFormatter.format('portuguese', 123456)).toBe('123.456');
            expect(NumberFormatter.format('portuguese', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('portuguese', 1234567)).toBe('1.234.567');
            expect(NumberFormatter.format('portuguese', 100000000)).toBe('100.000.000');
        });
        
        it('should format numbers using the BBC Russian style', function () {
            expect(NumberFormatter.format('russian', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('russian', 546)).toBe('546');
            expect(NumberFormatter.format('russian', 123456)).toBe('123 456');
            expect(NumberFormatter.format('russian', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('russian', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('russian', 100000000)).toBe('100 000 000');
        });

        it('should format numbers using the BBC Sinhala style', function () {
            expect(NumberFormatter.format('sinhala', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('sinhala', 546)).toBe('546');
            expect(NumberFormatter.format('sinhala', 123456)).toBe('123,456');
            expect(NumberFormatter.format('sinhala', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('sinhala', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('sinhala', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC Somali style', function () {
            expect(NumberFormatter.format('somali', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('somali', 546)).toBe('546');
            expect(NumberFormatter.format('somali', 123456)).toBe('123,456');
            expect(NumberFormatter.format('somali', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('somali', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('somali', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC Spanish style', function () {
            expect(NumberFormatter.format('spanish', 14562.65)).toBe('14.562.65');
            expect(NumberFormatter.format('spanish', 546)).toBe('546');
            expect(NumberFormatter.format('spanish', 123456)).toBe('123.456');
            expect(NumberFormatter.format('spanish', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('spanish', 1234567)).toBe('1.234.567');
            expect(NumberFormatter.format('spanish', 100000000)).toBe('100.000.000');
        });
        
        it('should format numbers using the BBC Swahili style', function () {
            expect(NumberFormatter.format('swahili', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('swahili', 546)).toBe('546');
            expect(NumberFormatter.format('swahili', 123456)).toBe('123,456');
            expect(NumberFormatter.format('swahili', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('swahili', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('swahili', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Tamil style', function () {
            expect(NumberFormatter.format('tamil', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('tamil', 546)).toBe('546');
            expect(NumberFormatter.format('tamil', 123456)).toBe('123,456');
            expect(NumberFormatter.format('tamil', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('tamil', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('tamil', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Thai style', function () {
            expect(NumberFormatter.format('thai', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('thai', 546)).toBe('546');
            expect(NumberFormatter.format('thai', 123456)).toBe('123,456');
            expect(NumberFormatter.format('thai', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('thai', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('thai', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Turkish style', function () {
            expect(NumberFormatter.format('turkish', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('turkish', 546)).toBe('546');
            expect(NumberFormatter.format('turkish', 123456)).toBe('123,456');
            expect(NumberFormatter.format('turkish', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('turkish', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('turkish', 100000000)).toBe('100,000,000');
        });
        
        it('should format numbers using the BBC Urdu style', function () {
            expect(NumberFormatter.format('urdu', 14562.65)).toBe('14,562.65');
            expect(NumberFormatter.format('urdu', 546)).toBe('546');
            expect(NumberFormatter.format('urdu', 123456)).toBe('123,456');
            expect(NumberFormatter.format('urdu', 1.23)).toBe('1.23');
            expect(NumberFormatter.format('urdu', 1234567)).toBe('1,234,567');
            expect(NumberFormatter.format('urdu', 100000000)).toBe('100,000,000');
        });

        it('should format numbers using the BBC Ukrainian style', function () {
            expect(NumberFormatter.format('ukrainian', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('ukrainian', 546)).toBe('546');
            expect(NumberFormatter.format('ukrainian', 123456)).toBe('123 456');
            expect(NumberFormatter.format('ukrainian', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('ukrainian', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('ukrainian', 100000000)).toBe('100 000 000');
        });

        it('should format numbers using the BBC Uzbek style', function () {
            expect(NumberFormatter.format('uzbek', 14562.65)).toBe('14 562,65');
            expect(NumberFormatter.format('uzbek', 546)).toBe('546');
            expect(NumberFormatter.format('uzbek', 123456)).toBe('123 456');
            expect(NumberFormatter.format('uzbek', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('uzbek', 1234567)).toBe('1 234 567');
            expect(NumberFormatter.format('uzbek', 100000000)).toBe('100 000 000');
        });
        
        it('should format numbers using the BBC Vietnamese style', function () {
            expect(NumberFormatter.format('vietnamese', 14562.65)).toBe('14.562,65');
            expect(NumberFormatter.format('vietnamese', 546)).toBe('546');
            expect(NumberFormatter.format('vietnamese', 123456)).toBe('123.456');
            expect(NumberFormatter.format('vietnamese', 1.23)).toBe('1,23');
            expect(NumberFormatter.format('vietnamese', 1234567)).toBe('1.234.567');
            expect(NumberFormatter.format('vietnamese', 100000000)).toBe('100.000.000');
        });
    });

    describe('Percentage formatter', function () {
        it('should append the percentage sign to the end when no service is found', function () {
            expect(NumberFormatter.percentageFormat('non-matching-service', 50)).toBe('50%');
        });
        it('should append the percentage sign when the service requires', function () {
            expect(NumberFormatter.percentageFormat('english', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('arabic', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('azeri', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('bengali', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('burmese', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('chinese_simp', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('chinese_trad', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('ukchina_simp', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('ukchina_trad', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('french', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('gahuza', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('hausa', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('hindi', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('indonesia', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('kyrgyz', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('pashto', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('russian', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('sinhala', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('somali', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('spanish', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('swahili', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('tamil', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('thai', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('ukrainian', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('uzbek', 50)).toBe('50%');
            expect(NumberFormatter.percentageFormat('vietnamese', 50)).toBe('50%');
        });
        it('should prepend the percentage sign when the service requires', function () {
            expect(NumberFormatter.percentageFormat('portuguese', 50)).toBe('%50');
            expect(NumberFormatter.percentageFormat('turkish', 50)).toBe('%50');
            expect(NumberFormatter.percentageFormat('urdu', 50)).toBe('%50');
        });
    });
});
