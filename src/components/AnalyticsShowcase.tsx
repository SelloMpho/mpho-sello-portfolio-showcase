import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Activity, Boxes, Cpu, Database, GitBranch, ShieldCheck } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';

gsap.registerPlugin(ScrollTrigger);

const revenue = [
  { m: 'Jan', v: 32 }, { m: 'Feb', v: 48 }, { m: 'Mar', v: 41 },
  { m: 'Apr', v: 67 }, { m: 'May', v: 74 }, { m: 'Jun', v: 89 },
  { m: 'Jul', v: 96 }, { m: 'Aug', v: 110 }, { m: 'Sep', v: 124 },
  { m: 'Oct', v: 138 }, { m: 'Nov', v: 152 }, { m: 'Dec', v: 168 },
];

const channels = [
  { c: 'Direct', v: 42 },
  { c: 'Search', v: 28 },
  { c: 'Referral', v: 16 },
  { c: 'Social', v: 14 },
];

const ops = [
  { name: 'Procure', value: 28 },
  { name: 'Finance', value: 22 },
  { name: 'Inventory', value: 19 },
  { name: 'CRM', value: 16 },
  { name: 'HR', value: 15 },
];

const KPIS = [
  { label: 'Pipelines Shipped', value: 24, icon: GitBranch },
  { label: 'Data Models', value: 38, icon: Database },
  { label: 'ERP Modules', value: 12, icon: Boxes },
  { label: 'Uptime %', value: 99, icon: ShieldCheck },
];

const PIE_COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))', '#7c5cff', '#23b3a6', '#f47b6e'];

const AnalyticsShowcase = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.kpi-card', {
        y: 18, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: '.kpi-row', start: 'top 80%' },
      });
      gsap.from('.viz-panel', {
        y: 24, opacity: 0, scale: 0.99, duration: 0.7, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: '.viz-grid', start: 'top 80%' },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="analytics"
      ref={root}
      className="relative py-32 overflow-hidden bg-background"
    >
      <div
        aria-hidden
        data-watermark
        className="pointer-events-none absolute -top-10 left-0 right-0 text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.03] whitespace-nowrap select-none"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        ANALYTICS · ERP
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
              <span className="h-px w-10 bg-accent" /> Live Systems
            </div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
              Analytics, intelligence,<br /> and enterprise operations.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-base lg:text-right">
            A composite view of the engineering, BI, and ERP work I deliver —
            instrumented, animated, and explainable.
          </p>
        </div>

        {/* KPI row */}
        <div className="kpi-row grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {KPIS.map((k) => {
            const Icon = k.icon;
            return (
              <div
                key={k.label}
                className="kpi-card glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {k.label}
                  </span>
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div className="text-4xl font-bold text-foreground flex items-baseline gap-1">
                  <NumberTicker value={k.value} />
                  <span className="text-accent text-xl">+</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visualization grid */}
        <div className="viz-grid grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Revenue area chart - spans 2 */}
          <div className="viz-panel glass rounded-2xl p-6 lg:col-span-2 h-[360px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Pipeline Throughput
                </div>
                <div className="text-lg font-semibold mt-1 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent" />
                  Year over year — events ingested (M)
                </div>
              </div>
              <span className="text-xs text-accent">+412% YoY</span>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenue} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    fill="url(#grad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ERP module pie */}
          <div className="viz-panel glass rounded-2xl p-6 h-[360px] flex flex-col">
            <div className="mb-3">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">ERP Module Load</div>
              <div className="text-lg font-semibold mt-1 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-accent" />
                Workflow distribution
              </div>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ops}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={48}
                    outerRadius={88}
                    paddingAngle={3}
                    stroke="hsl(var(--background))"
                  >
                    {ops.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {ops.map((o, i) => (
                <div key={o.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                  {o.name}
                </div>
              ))}
            </div>
          </div>

          {/* Channel bar */}
          <div className="viz-panel glass rounded-2xl p-6 h-[300px] flex flex-col">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Attribution Mix
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channels} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
                  <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="c" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="v" fill="hsl(var(--accent))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ERP system status mock */}
          <div className="viz-panel glass rounded-2xl p-6 lg:col-span-2 h-[300px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                ERP System Health
              </div>
              <span className="flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                All systems nominal
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-hidden">
              {[
                { name: 'Procurement Service', uptime: 99.98, latency: 142 },
                { name: 'Finance Ledger', uptime: 99.92, latency: 211 },
                { name: 'Inventory Sync', uptime: 99.87, latency: 188 },
                { name: 'CRM Pipeline', uptime: 99.95, latency: 167 },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-card/40 px-4 py-3"
                >
                  <div>
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
                      {s.uptime}% uptime · {s.latency}ms
                    </div>
                  </div>
                  <div className="h-8 w-16 rounded bg-gradient-to-r from-accent/30 to-primary/30 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-accent"
                      style={{ width: `${s.uptime}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;
