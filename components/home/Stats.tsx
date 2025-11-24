
import React from "react";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function Stats() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const stats = [
    {
      icon: TrendingUp,
      value: "$2.4B+",
      label: t('stats_funds'),
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users,
      value: "45,000+",
      label: t('stats_claims'),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Globe,
      value: "150+",
      label: t('stats_countries'),
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Award,
      value: "98%",
      label: t('stats_rate'),
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
                }}
              ></div>
              <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
