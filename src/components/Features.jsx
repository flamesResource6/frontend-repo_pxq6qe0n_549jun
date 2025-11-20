const features = [
  {
    title: 'Go-To-Market',
    points: ['ICP + messaging', 'Channel strategy', 'Field sales playbooks']
  },
  { title: 'Operations', points: ['Process automation', 'Vendor due diligence', 'Cost optimization'] },
  { title: 'Technology', points: ['AI enablement', 'Data pipelines', 'Cloud modernization'] },
  { title: 'Regulatory', points: ['Tax + compliance guidance', 'Infosec baselines', 'Risk assessments'] },
]

const Features = () => (
  <section id="features" className="py-14 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold text-lg">{f.title}</h3>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm list-disc list-inside">
              {f.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features
