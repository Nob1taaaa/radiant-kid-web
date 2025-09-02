import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { IdCard, Users, GraduationCap, BookOpen, Building2, BadgeInfo } from 'lucide-react';
import { school } from '@/data/school';

const colors = [
  'hsl(var(--orange-medium))',
  'hsl(var(--teal-medium))',
  'hsl(var(--blue-medium))',
  'hsl(var(--purple-medium))',
  'hsl(var(--red-medium))',
];

const InfoCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string | number | null | undefined }) => (
  <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
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
    <section className="py-20 bg-gradient-to-br from-orange-light/10 via-white to-teal-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <BadgeInfo className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">Official School Stats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">At a Glance</h2>
          <p className="text-muted-foreground mt-3">Verified details presented in a colorful, kid-friendly design.</p>
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
            <div className="bg-white rounded-3xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-4">Enrollment by Class</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={school.stats.enrollmentByClass}>
                    <XAxis dataKey="classLabel" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} />
                    <Bar dataKey="students" radius={[8, 8, 0, 0]} fill={colors[1]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Students vs Teachers */}
          {hasTotals && (
            <div className="bg-white rounded-3xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-4">Students vs Teachers</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie dataKey="value" innerRadius={70} outerRadius={110} paddingAngle={2} data={[
                      ...(totals.students ? [{ name: 'Students', value: totals.students }] : []),
                      ...(totals.teachers ? [{ name: 'Teachers', value: totals.teachers }] : []),
                    ]}>
                      {[0,1,2,3].map((i) => (
                        <Cell key={i} fill={colors[i % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Facilities checklist */}
        {school.stats.facilities.length > 0 && (
          <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Facilities</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {school.stats.facilities.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-soft">
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
