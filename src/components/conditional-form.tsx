import { Card } from '@/components/ui/card.tsx';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select.tsx';
import { EMPLOYMENT_TYPE_OPTIONS_MAP, type EmploymentType } from '@/lib/credit-helper.ts';
import { useState } from 'react';
import { Label } from '@/components/ui/label.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import ConditionInformation from '@/components/condition-information.tsx';

export default function ConditionalForm() {
	const [employmentType, setEmploymentType] = useState<EmploymentType | undefined>();
	const [moreThanSixMonths, setMoreThanSixMonths] = useState<boolean>(false);

	return (
		<Card className="mx-auto w-[510px] max-w-full">
			<Tabs defaultValue="mortgage">
				<TabsList className="rounded-b-none px-1.5 pb-1.5 -mx-6 -mt-6 w-[calc(100%_+_3rem)]">
					<TabsTrigger value="mortgage" className="flex-1 uppercase rounded-bl-none">
						Mortgage
					</TabsTrigger>
					<TabsTrigger value="cash" className="flex-1 uppercase rounded-br-none">
						Cash
					</TabsTrigger>
				</TabsList>
				<div className="flex gap-2 w-full">
					<Label htmlFor="employmentType">What is your employment status? </Label>
					<Select
						value={employmentType}
						onValueChange={(value) => setEmploymentType(value as EmploymentType)}
					>
						<SelectTrigger id="employmentType" className="flex-1">
							<SelectValue placeholder="Choose employment status" />
						</SelectTrigger>
						<SelectContent>
							{Array.from(EMPLOYMENT_TYPE_OPTIONS_MAP.entries()).map(([type, label]) => (
								<SelectItem key={type} value={type}>
									{label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Label className="hover:bg-secondary/10 cursor-pointer flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-accent has-[[aria-checked=true]]:bg-accent/10">
					<Checkbox
						id="toggle-2"
						checked={moreThanSixMonths}
						onCheckedChange={(checked) => setMoreThanSixMonths(checked as boolean)}
						className="data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
					/>
					<div className="grid gap-1.5 font-normal">
						<p className="text-sm leading-none font-medium">Employed for over 6 months</p>
						<p className="text-muted-foreground text-sm">
							Have you been employed for more than 6 months in the same workplace?
						</p>
					</div>
				</Label>
				{employmentType && (
					<ConditionInformation formData={{ employmentType, moreThanSixMonths }} />
				)}
			</Tabs>
		</Card>
	);
}
