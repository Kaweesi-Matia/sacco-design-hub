import { Wallet, TrendingUp, Users, PiggyBank } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import StatCard from "@/components/StatCard";
import QuickActions from "@/components/QuickActions";
import TransactionList from "@/components/TransactionList";
import LoanSummary from "@/components/LoanSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <DashboardHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Savings"
            value="KES 285,000"
            subtitle="Shares + Deposits"
            icon={Wallet}
            trend={{ value: "12% this quarter", positive: true }}
            delay={0}
          />
          <StatCard
            title="Monthly Contribution"
            value="KES 5,000"
            subtitle="Due on 15th"
            icon={PiggyBank}
            delay={0.1}
          />
          <StatCard
            title="Loan Balance"
            value="KES 55,000"
            subtitle="1 active loan"
            icon={TrendingUp}
            trend={{ value: "KES 8,500/mo", positive: true }}
            delay={0.2}
          />
          <StatCard
            title="Members"
            value="1,247"
            subtitle="Active members"
            icon={Users}
            trend={{ value: "23 new this month", positive: true }}
            delay={0.3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
          <div className="lg:col-span-2 space-y-6">
            <TransactionList />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <LoanSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
