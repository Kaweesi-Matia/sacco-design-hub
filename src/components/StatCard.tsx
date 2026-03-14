import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: string; positive: boolean };
  delay?: number;
}

const StatCard = ({ title, value, subtitle, icon: Icon, trend, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-muted-foreground">{title}</span>
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
    </div>
    <p className="text-3xl font-heading font-bold text-foreground">{value}</p>
    {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    {trend && (
      <p className={`text-sm mt-2 font-medium ${trend.positive ? "text-success" : "text-destructive"}`}>
        {trend.positive ? "↑" : "↓"} {trend.value}
      </p>
    )}
  </motion.div>
);

export default StatCard;
