export type CreditFormData = {
	employmentType: EmploymentType;
	moreThanSixMonths: boolean;
};

export type EmploymentType =
	| 'contract-unlimited'
	| 'contract-limited'
	| 'entrepreneur'
	| 'unemployed'
	| 'other';

export const EMPLOYMENT_TYPE_OPTIONS_MAP = new Map<EmploymentType, string>()
	.set('contract-unlimited', 'Permanent contract')
	.set('contract-limited', 'Fixed-term contract')
	.set('entrepreneur', 'Entrepreneur')
	.set('unemployed', 'Unemployed')
	.set('other', 'Other');

export const isCreditCapable = (formData: CreditFormData) => {
	const { employmentType, moreThanSixMonths } = formData;
	return employmentType === 'contract-unlimited' && moreThanSixMonths;
};

export const creditCapableText = (formData: CreditFormData) => {
	const { employmentType, moreThanSixMonths } = formData;

	switch (employmentType) {
		case 'contract-unlimited':
			if (moreThanSixMonths) {
				return 'You meet the initial conditions for obtaining a loan. Continue with the form to find out the amount of credit you can get!';
			} else {
				return 'Most banks require information about the six-month average salary with your last employer.';
			}
		case 'contract-limited':
			return 'To be eligible for a loan, you need to have a permanent contract with your employer.';
		case 'entrepreneur':
			return 'Loans for entrepreneurs differ from loans for individuals, so we advise you to contact your bank to find out the specific conditions for obtaining a loan.';
		case 'unemployed':
			return 'You need to have been employed for a consecutive 6 months (in some banks 3 months) in order to qualify for a loan.';
		case 'other':
			return 'If you do not fall into any of the listed categories, we advise you to contact your bank to find out the conditions for obtaining a loan.';
	}
};
