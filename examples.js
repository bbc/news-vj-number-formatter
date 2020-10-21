const numberFormatter = require('./numberFormatter.node');

numberFormatter.format('english', 1928074); // 1,928,074
numberFormatter.format('english', 27.10); // 27.1
numberFormatter.percentageFormat('english', 82.0); // 82%

numberFormatter.format('arabic', 1928074); // 1928074
numberFormatter.format('arabic', 27.10); // 27,1
numberFormatter.percentageFormat('arabic', 82.0); // %82

numberFormatter.format('bengali', 1928074); // ১,৯২৮,০৭৪
numberFormatter.format('bengali', 27.10); // ২৭.১
numberFormatter.percentageFormat('bengali', 82.0); // ৮২%

numberFormatter.format('korean', 1928074); // 1,928,074
numberFormatter.format('korean', 27.10); // 27.1
numberFormatter.percentageFormat('korean', 82.0); // 82%

numberFormatter.format('nepali', 1928074); // १,९२८,०७४
numberFormatter.format('nepali', 27.10); // २७.१
numberFormatter.percentageFormat('nepali', 82.0); // ८२%

numberFormatter.format('mundo', 1928074); // 1.928.074
numberFormatter.format('mundo', 27.10); // 27,1
numberFormatter.percentageFormat('mundo', 82.0); // 82%

numberFormatter.format('persian', 1928074); // ۱۹۲۸۰۷۴
numberFormatter.format('persian', 27.10); // ۲۷.۱
numberFormatter.percentageFormat('persian', 82.0); // %۸۲
