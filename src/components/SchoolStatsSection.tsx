import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { IdCard, GraduationCap, BookOpen, Building2, BarChart3, Users } from 'lucide-react';
import { school } from '@/data/school';

const colors = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))',
  'hsl(var(--green-medium))',
  'hsl(var(--navy-medium))',
  'hsl(var(--gold-medium))',
];

const InfoCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string | number | null | undefined }) => (
  <div className="relative bg-gradient-to-br from-white to-white/90 rounded-3xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-medium">
        <Icon size={18} />
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
    <div className="text-2xl font-bold text-foreground">{value ?? '—'}</div>
  </div>
);

const SchoolStatsSection = () => {
  const totals = school.stats.totals;
  const hasEnrollment = school.stats.enrollmentByClass && school.stats.enrollmentByClass.length > 0;
  const hasTotals = (totals.students ?? null) !== null || (totals.teachers ?? null) !== null;

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <BarChart3 className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">School Statistics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Facts & Figures</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive data about our educational institution and student community.</p>
        </div>

        {/* Top info cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <InfoCard icon={IdCard} label="UDISE Code" value={school.stats.udise} />
          <InfoCard icon={Building2} label="Year Established" value={school.stats.yearEstablished} />
          <InfoCard icon={BookOpen} label="Category" value={school.stats.category} />
          <InfoCard icon={GraduationCap} label="Classes" value={school.stats.classesOffered?.join(', ') || null} />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enrollment chart */}
          {hasEnrollment && (
            <div className="bg-white rounded-3xl p-6 shadow-soft animate-fade-in">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="text-primary" size={18}/> Enrollment by Class</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[...school.stats.enrollmentByClass]}>
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colors[2]} stopOpacity={0.95} />
                        <stop offset="100%" stopColor={colors[1]} stopOpacity={0.7} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="classLabel" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} />
                    <Bar dataKey="students" radius={[10, 10, 0, 0]} fill="url(#barGrad)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Students vs Teachers */}
          {hasTotals && (
            <div className="bg-white rounded-3xl p-6 shadow-soft animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Users className="text-secondary" size={18}/> Students vs Teachers</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      <linearGradient id="pieA" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="100%" stopColor={colors[3]} />
                      </linearGradient>
                      <linearGradient id="pieB" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={colors[1]} />
                        <stop offset="100%" stopColor={colors[2]} />
                      </linearGradient>
                    </defs>
                    <Pie dataKey="value" innerRadius={70} outerRadius={110} paddingAngle={2} data={[
                      ...(totals.students ? [{ name: 'Students', value: totals.students, fill: 'url(#pieA)' }] : []),
                      ...(totals.teachers ? [{ name: 'Teachers', value: totals.teachers, fill: 'url(#pieB)' }] : []),
                    ]}>
                      {([totals.students, totals.teachers].filter(Boolean) as number[]).map((_, i) => (
                        <Cell key={i} fill={(i === 0 ? 'url(#pieA)' : 'url(#pieB)') as any} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center gap-6 text-sm">
                {totals.students !== null && (
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg,'+colors[0]+','+colors[3]+')' }}></span> Students: {totals.students}</div>
                )}
                {totals.teachers !== null && (
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg,'+colors[1]+','+colors[2]+')' }}></span> Teachers: {totals.teachers}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Facilities checklist */}
        {school.stats.facilities.length > 0 && (
          <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Building2 className="text-primary" size={18}/> Facilities</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {school.stats.facilities.map((f, idx) => (
                <div key={f.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${f.value ? 'bg-green-500' : f.value === false ? 'bg-red-500' : 'bg-gray-300'}`}></span>
                  <span className="text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchoolStatsSection;
