import { motion } from "framer-motion";
import { PiggyBank, HandCoins, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { label: "Deposit", icon: PiggyBank, description: "Add to savings" },
  { label: "Withdraw", icon: HandCoins, description: "Request withdrawal" },
  { label: "Apply Loan", icon: FileText, description: "New loan application" },
  { label: "Members", icon: Users, description: "View all members" },
];

const QuickActions = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="rounded-xl border bg-card p-6 shadow-sm"
  >
    <h3 className="text-lg font-heading font-semibold mb-4">Quick Actions</h3>
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          className="h-auto flex-col gap-2 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          <action.icon className="h-5 w-5" />
          <span className="text-sm font-medium">{action.label}</span>
          <span className="text-xs opacity-70">{action.description}</span>
        </Button>
      ))}
    </div>
  </motion.div>
);

export default QuickActions;
