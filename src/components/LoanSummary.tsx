import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const loans = [
  { name: "Development Loan", total: 200000, paid: 145000, monthly: 8500, due: "Jun 2026" },
  { name: "Emergency Loan", total: 50000, paid: 50000, monthly: 0, due: "Completed" },
];

const LoanSummary = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="rounded-xl border bg-card p-6 shadow-sm"
  >
    <h3 className="text-lg font-heading font-semibold mb-4">Active Loans</h3>
    <div className="space-y-5">
      {loans.map((loan) => {
        const progress = Math.round((loan.paid / loan.total) * 100);
        return (
          <div key={loan.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{loan.name}</span>
              <span className="text-xs text-muted-foreground">{loan.due}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>KES {loan.paid.toLocaleString()} paid</span>
              <span>{progress}%</span>
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default LoanSummary;
