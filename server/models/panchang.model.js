import mongoose, { Schema } from 'mongoose';

const TithiSchema = new Schema({
  name: String,
  number: Number,
  next_tithi: String,
  type: String,
  diety: String,
  start: String,
  end: String,
  meaning: String,
  special: String,
});

const NakshatraSchema = new Schema({
  name: String,
  number: Number,
  lord: String,
  diety: String,
  start: String,
  next_nakshatra: String,
  end: String,
  meaning: String,
  special: String,
});

const KaranaSchema = new Schema({
  name: String,
  number: Number,
  type: String,
  lord: String,
  diety: String,
  start: String,
  end: String,
  special: String,
  next_karana: String,
});

const YogaSchema = new Schema({
  name: String,
  number: Number,
  start: String,
  end: String,
  next_yoga: String,
  meaning: String,
  special: String,
});

const MasaSchema = new Schema({
  amanta_number: Number,
  amanta_date: Number,
  amanta_name: String,
  alternate_amanta_name: String,
  amanta_start: String,
  amanta_end: String,
  adhik_maasa: Boolean,
  ayana: String,
  real_ayana: String,
  tamil_month_num: Number,
  tamil_month: String,
  tamil_day: Number,
  purnimanta_date: Number,
  purnimanta_number: Number,
  purnimanta_name: String,
  alternate_purnimanta_name: String,
  purnimanta_start: String,
  purnimanta_end: String,
  moon_phase: String,
  paksha: String,
  ritu: String,
  ritu_tamil: String,
});

const YearsSchema = new Schema({
  kali: Number,
  saka: Number,
  vikram_samvaat: Number,
  kali_samvaat_number: Number,
  kali_samvaat_name: String,
  vikram_samvaat_number: Number,
  vikram_samvaat_name: String,
  saka_samvaat_number: Number,
  saka_samvaat_name: String,
});

const AdvancedDetailsSchema = new Schema({
  sun_rise: String,
  sun_set: String,
  moon_rise: String,
  moon_set: String,
  next_full_moon: String,
  next_new_moon: String,
  masa: MasaSchema,
  moon_yogini_nivas: String,
  ahargana: Number,
  years: YearsSchema,
  vaara: String,
  disha_shool: String,
  abhijit_muhurta: {
    start: String,
    end: String,
  },
});

const PanchangSchema = new Schema({
  day: {
    name: String,
  },
  tithi: TithiSchema,
  nakshatra: NakshatraSchema,
  karana: KaranaSchema,
  yoga: YogaSchema,
  ayanamsa: {
    name: String,
  },
  rasi: {
    name: String,
  },
  advanced_details: AdvancedDetailsSchema,
  rahukaal: String,
  gulika: String,
  yamakanta: String,
  date: String,
}, { timestamps: true });

export const Panchang = mongoose.model('Panchang', PanchangSchema);