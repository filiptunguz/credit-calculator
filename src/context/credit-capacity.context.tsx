'use client';

import { type ReactNode, useState } from 'react';
import { CreditCapacityContext, getDefaultCreditFormData } from '@/lib/credit-helper.ts';
import type { CreditCapacityFields } from '@/schemas/credit-capacity.schema.ts';

export default function CreditCapacityContextProvider({
	isMortgage,
	children,
}: {
	isMortgage: boolean;
	children: ReactNode;
}) {
	const [creditValues, setCreditValues] = useState<CreditCapacityFields>(
		getDefaultCreditFormData(isMortgage),
	);

	return (
		<CreditCapacityContext.Provider value={{ creditValues, setCreditValues }}>
			{children}
		</CreditCapacityContext.Provider>
	);
}
