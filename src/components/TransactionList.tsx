import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, Landmark } from "lucide-react";

const transactions = [
  { id: 1, type: "deposit", description: "Monthly Contribution", amount: "+KES 5,000", date: "Mar 12, 2026", icon: ArrowDownLeft },
  { id: 2, type: "withdrawal", description: "Emergency Withdrawal", amount: "-KES 15,000", date: "Mar 10, 2026", icon: ArrowUpRight },
  { id: 3, type: "loan", description: "Loan Repayment", amount: "-KES 8,500", date: "Mar 8, 2026", icon: Landmark },
  { id: 4, type: "deposit", description: "Bonus Savings", amount: "+KES 2,000", date: "Mar 5, 2026", icon: ArrowDownLeft },
  { id: 5, type: "deposit", description: "Monthly Contribution", amount: "+KES 5,000", date: "Feb 28, 2026", icon: ArrowDownLeft },
];

const TransactionList = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="rounded-xl border bg-card shadow-sm"
  >
    <div className="p-6 border-b">
      <h3 className="text-lg font-heading font-semibold">Recent Transactions</h3>
    </div>
    <div className="divide-y">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between p-4 px-6 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center ${
              tx.type === "deposit" ? "bg-success/10" : tx.type === "withdrawal" ? "bg-destructive/10" : "bg-accent/20"
            }`}>
              <tx.icon className={`h-4 w-4 ${
                tx.type === "deposit" ? "text-success" : tx.type === "withdrawal" ? "text-destructive" : "text-accent-foreground"
              }`} />
            </div>
            <div>
              <p className="text-sm font-medium">{tx.description}</p>
              <p className="text-xs text-muted-foreground">{tx.date}</p>
            </div>
          </div>
          <span className={`text-sm font-semibold ${
            tx.type === "deposit" ? "text-success" : "text-foreground"
          }`}>{tx.amount}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default TransactionList;
