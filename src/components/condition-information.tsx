import { creditCapableText, type CreditFormData, isCreditCapable } from '@/lib/credit-helper.ts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';

type ConditionInformationProps = {
	formData: CreditFormData;
};

export default function ConditionInformation({ formData }: ConditionInformationProps) {
	const creditCapable = isCreditCapable(formData);

	return (
		<Alert variant={creditCapable ? undefined : 'destructive'}>
			{creditCapable ? <CheckCircle2Icon /> : <AlertCircleIcon />}
			<AlertTitle>
				{creditCapable ? 'Success! You are creditworthy.' : 'You are not creditworthy.'}
			</AlertTitle>
			<AlertDescription>{creditCapableText(formData)}</AlertDescription>
		</Alert>
	);
}
