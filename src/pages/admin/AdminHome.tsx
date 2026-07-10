import { useEffect, useState } from 'react';
import { Plus, Trash2, Save, Loader2, CheckCircle2 } from 'lucide-react';
import { api } from '../../lib/api';
import type { HomeContent } from '../../types/content';
import { Section, Field, TextInput, TextArea, PrimaryButton, SecondaryButton, DangerButton } from '../../components/admin/FormBits';
import ImageUploader from '../../components/admin/ImageUploader';

const PP = 'Poppins, sans-serif';

const EMPTY: HomeContent = {
  heroLine1: '', heroPhrases: [], heroLine2: '', heroDescription: '',
  heroVideoUrl: '', heroImage1Url: '', heroImage2Url: '',
  ctaPrimaryText: '', ctaSecondaryText: '',
  oneStopLabel: '', oneStopTitle: '', oneStopCards: [],
  whyUsLogoUrl: '', whyUsHeading: '', whyUsBody: '', whyUsItems: [],
  servicesPreviewLabel: '', servicesPreviewTitle: '', servicesPreviewDescription: '',
  testimonialsHeading: '', testimonials: [],
  stats: [],
};

export default function AdminHome() {
  const [data, setData] = useState<HomeContent>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get<HomeContent>('/home')
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const updated = await api.put<HomeContent>('/home', data);
      setData(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-gray-400 text-sm">Loading…</p>;
  }

  const update = <K extends keyof HomeContent>(key: K, value: HomeContent[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const updatePhrase = (i: number, value: string) => {
    const next = [...data.heroPhrases];
    next[i] = value;
    update('heroPhrases', next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-bold" style={{ fontFamily: PP, fontSize: '1.5rem', color: '#111' }}>Home Page</h1>
          <p className="text-gray-400 text-sm mt-1">Edit the text and images shown on your homepage.</p>
        </div>
        <PrimaryButton onClick={save} disabled={saving}>
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          {saving ? 'Saving…' : 'Save Changes'}
        </PrimaryButton>
      </div>

      {saved && (
        <div className="mb-5 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
          <CheckCircle2 size={15} /> Saved — changes are live on the site.
        </div>
      )}
      {error && <div className="mb-5 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">{error}</div>}

      <Section title="Hero Section" description="The top banner visitors see first.">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Line before phrase"><TextInput value={data.heroLine1} onChange={(e) => update('heroLine1', e.target.value)} /></Field>
          <Field label="Line after phrase"><TextInput value={data.heroLine2} onChange={(e) => update('heroLine2', e.target.value)} /></Field>
        </div>
        <Field label="Rotating phrases">
          <div className="space-y-2">
            {data.heroPhrases.map((p, i) => (
              <div key={i} className="flex gap-2">
                <TextInput value={p} onChange={(e) => updatePhrase(i, e.target.value)} />
                <DangerButton type="button" onClick={() => update('heroPhrases', data.heroPhrases.filter((_, j) => j !== i))}><Trash2 size={13} /></DangerButton>
              </div>
            ))}
            <SecondaryButton type="button" onClick={() => update('heroPhrases', [...data.heroPhrases, ''])}><Plus size={13} /> Add phrase</SecondaryButton>
          </div>
        </Field>
        <Field label="Description"><TextArea rows={3} value={data.heroDescription} onChange={(e) => update('heroDescription', e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Primary button text"><TextInput value={data.ctaPrimaryText} onChange={(e) => update('ctaPrimaryText', e.target.value)} /></Field>
          <Field label="Secondary button text"><TextInput value={data.ctaSecondaryText} onChange={(e) => update('ctaSecondaryText', e.target.value)} /></Field>
        </div>
        <ImageUploader label="Hero video" value={data.heroVideoUrl} onChange={(v) => update('heroVideoUrl', v)} accept="video/*" />
        <ImageUploader label="Hero image 1" value={data.heroImage1Url} onChange={(v) => update('heroImage1Url', v)} />
        <ImageUploader label="Hero image 2" value={data.heroImage2Url} onChange={(v) => update('heroImage2Url', v)} />
      </Section>

      <Section title="One Stop Consultancy Partner">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Label"><TextInput value={data.oneStopLabel} onChange={(e) => update('oneStopLabel', e.target.value)} /></Field>
          <Field label="Title"><TextInput value={data.oneStopTitle} onChange={(e) => update('oneStopTitle', e.target.value)} /></Field>
        </div>
        <Field label="Cards">
          <div className="space-y-3">
            {data.oneStopCards.map((c, i) => (
              <div key={i} className="flex gap-2 items-start p-3 rounded-xl border border-gray-100">
                <div className="flex-1 space-y-2">
                  <TextInput placeholder="Title" value={c.title} onChange={(e) => {
                    const next = [...data.oneStopCards]; next[i] = { ...c, title: e.target.value }; update('oneStopCards', next);
                  }} />
                  <TextInput placeholder="Description" value={c.desc} onChange={(e) => {
                    const next = [...data.oneStopCards]; next[i] = { ...c, desc: e.target.value }; update('oneStopCards', next);
                  }} />
                </div>
                <DangerButton type="button" onClick={() => update('oneStopCards', data.oneStopCards.filter((_, j) => j !== i))}><Trash2 size={13} /></DangerButton>
              </div>
            ))}
            <SecondaryButton type="button" onClick={() => update('oneStopCards', [...data.oneStopCards, { title: '', desc: '' }])}><Plus size={13} /> Add card</SecondaryButton>
          </div>
        </Field>
      </Section>

      <Section title="Why Choose Us">
        <ImageUploader label="Logo" value={data.whyUsLogoUrl} onChange={(v) => update('whyUsLogoUrl', v)} />
        <Field label="Heading"><TextInput value={data.whyUsHeading} onChange={(e) => update('whyUsHeading', e.target.value)} /></Field>
        <Field label="Body text"><TextArea rows={3} value={data.whyUsBody} onChange={(e) => update('whyUsBody', e.target.value)} /></Field>
        <Field label="Reasons">
          <div className="space-y-3">
            {data.whyUsItems.map((item, i) => (
              <div key={i} className="flex gap-2 items-start p-3 rounded-xl border border-gray-100">
                <div className="flex-1 space-y-2">
                  <TextInput placeholder="Title" value={item.title} onChange={(e) => {
                    const next = [...data.whyUsItems]; next[i] = { ...item, title: e.target.value }; update('whyUsItems', next);
                  }} />
                  <TextArea rows={2} placeholder="Description" value={item.desc} onChange={(e) => {
                    const next = [...data.whyUsItems]; next[i] = { ...item, desc: e.target.value }; update('whyUsItems', next);
                  }} />
                </div>
                <DangerButton type="button" onClick={() => update('whyUsItems', data.whyUsItems.filter((_, j) => j !== i))}><Trash2 size={13} /></DangerButton>
              </div>
            ))}
            <SecondaryButton type="button" onClick={() => update('whyUsItems', [...data.whyUsItems, { title: '', desc: '' }])}><Plus size={13} /> Add reason</SecondaryButton>
          </div>
        </Field>
      </Section>

      <Section title="Services Preview" description="Shown above the services grid on the homepage.">
        <Field label="Label"><TextInput value={data.servicesPreviewLabel} onChange={(e) => update('servicesPreviewLabel', e.target.value)} /></Field>
        <Field label="Title"><TextInput value={data.servicesPreviewTitle} onChange={(e) => update('servicesPreviewTitle', e.target.value)} /></Field>
        <Field label="Description"><TextArea rows={2} value={data.servicesPreviewDescription} onChange={(e) => update('servicesPreviewDescription', e.target.value)} /></Field>
      </Section>

      <Section title="Testimonials">
        <Field label="Section heading"><TextInput value={data.testimonialsHeading} onChange={(e) => update('testimonialsHeading', e.target.value)} /></Field>
        <Field label="Testimonials">
          <div className="space-y-3">
            {data.testimonials.map((t, i) => (
              <div key={i} className="flex gap-2 items-start p-3 rounded-xl border border-gray-100">
                <div className="flex-1 space-y-2">
                  <TextArea rows={2} placeholder="Quote" value={t.text} onChange={(e) => {
                    const next = [...data.testimonials]; next[i] = { ...t, text: e.target.value }; update('testimonials', next);
                  }} />
                  <div className="grid grid-cols-2 gap-2">
                    <TextInput placeholder="Author" value={t.author} onChange={(e) => {
                      const next = [...data.testimonials]; next[i] = { ...t, author: e.target.value }; update('testimonials', next);
                    }} />
                    <TextInput placeholder="Role" value={t.role} onChange={(e) => {
                      const next = [...data.testimonials]; next[i] = { ...t, role: e.target.value }; update('testimonials', next);
                    }} />
                  </div>
                </div>
                <DangerButton type="button" onClick={() => update('testimonials', data.testimonials.filter((_, j) => j !== i))}><Trash2 size={13} /></DangerButton>
              </div>
            ))}
            <SecondaryButton type="button" onClick={() => update('testimonials', [...data.testimonials, { text: '', author: '', role: '' }])}><Plus size={13} /> Add testimonial</SecondaryButton>
          </div>
        </Field>
      </Section>

      <Section title="Stats Bar">
        <div className="space-y-3">
          {data.stats.map((s, i) => (
            <div key={i} className="flex gap-2 items-center p-3 rounded-xl border border-gray-100">
              <TextInput type="number" placeholder="Target" value={s.target} onChange={(e) => {
                const next = [...data.stats]; next[i] = { ...s, target: Number(e.target.value) }; update('stats', next);
              }} className="w-24" />
              <TextInput placeholder="Suffix (+, %, ★)" value={s.suffix} onChange={(e) => {
                const next = [...data.stats]; next[i] = { ...s, suffix: e.target.value }; update('stats', next);
              }} className="w-32" />
              <TextInput placeholder="Label" value={s.label} onChange={(e) => {
                const next = [...data.stats]; next[i] = { ...s, label: e.target.value }; update('stats', next);
              }} className="flex-1" />
              <DangerButton type="button" onClick={() => update('stats', data.stats.filter((_, j) => j !== i))}><Trash2 size={13} /></DangerButton>
            </div>
          ))}
          <SecondaryButton type="button" onClick={() => update('stats', [...data.stats, { target: 0, decimals: 0, suffix: '', label: '' }])}><Plus size={13} /> Add stat</SecondaryButton>
        </div>
      </Section>

      <div className="flex justify-end">
        <PrimaryButton onClick={save} disabled={saving}>
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          {saving ? 'Saving…' : 'Save Changes'}
        </PrimaryButton>
      </div>
    </div>
  );
}
