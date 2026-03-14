import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center justify-between py-6"
  >
    <div>
      <h1 className="text-2xl md:text-3xl font-heading font-bold">
        Pamoja <span className="text-accent">Sacco</span>
      </h1>
      <p className="text-sm text-muted-foreground mt-1">Growing together, prospering together</p>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full relative">
        <Bell className="h-5 w-5" />
        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent" />
      </Button>
      <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm ml-2">
        JK
      </div>
    </div>
  </motion.header>
);

export default DashboardHeader;
