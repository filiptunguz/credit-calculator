import { z } from 'zod';

export const MINIMUM_SALARY = 350;

export const CreditCapacitySchema = z
	.object({
		salary: z.number().min(MINIMUM_SALARY, `Salary must be at least €${MINIMUM_SALARY}`),
		loanRate: z.number().min(0, 'Loan rate must be a positive number'),
		cardDebts: z.number().min(0, 'Card debts must be a positive number'),
		acceptableMinus: z.number().min(0, 'Acceptable minus must be a positive number'),
		paymentPeriod: z.number(),
	})
	.refine(
		(data) => {
			return data.loanRate + data.cardDebts <= data.salary;
		},
		{
			message: 'Total of loan rate and card debts must not exceed salary.',
			path: ['salary'],
		},
	)
	.refine(
		(data) => {
			return data.loanRate + data.cardDebts <= data.salary;
		},
		{
			message: 'Total of loan rate and card debts must not exceed salary.',
			path: ['loanRate'],
		},
	)
	.refine(
		(data) => {
			return data.loanRate + data.cardDebts <= data.salary;
		},
		{
			message: 'Total of loan rate and card debts must not exceed salary.',
			path: ['cardDebts'],
		},
	)
	.refine(
		(data) => {
			return data.acceptableMinus <= data.salary;
		},
		{
			message: 'Acceptable minus must not exceed salary.',
			path: ['acceptableMinus'],
		},
	);

export type CreditCapacityFields = z.infer<typeof CreditCapacitySchema>;
