import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "@/features/dashboard/components/hero-patten";
import { DashboardHeader } from "../components/dashboard-header";
import { TextInputPanel } from "../components/text-input-panel";

export function DashboardView(){
    return(
        <div className="relative">
            <PageHeader title="Dashboard" className="lg:hidden" />
            <HeroPattern/>
            <div className="relative space-y-8 p-4 lg:p-16">
                <DashboardHeader />
                <TextInputPanel />
            </div>
        </div>
    )
}