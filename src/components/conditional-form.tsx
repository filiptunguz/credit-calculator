import { Card } from '@/components/ui/card.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';

export default function ConditionalForm() {
	return (
		<Card className="mx-auto w-[510px] max-w-full">
			<Tabs defaultValue="mortgage w-full">
				<TabsList className="rounded-b-none px-1.5 pb-1.5 -mx-6 -mt-6 w-[calc(100%_+_3rem)]">
					<TabsTrigger value="mortgage" className="flex-1 uppercase rounded-bl-none">
						Mortgage
					</TabsTrigger>
					<TabsTrigger value="cash" className="flex-1 uppercase rounded-br-none">
						Cash
					</TabsTrigger>
				</TabsList>
				<TabsContent value="mortgage">
					<>mortgage</>
				</TabsContent>
				<TabsContent value="cash">
					<>cash</>
				</TabsContent>
			</Tabs>
		</Card>
	);
}
