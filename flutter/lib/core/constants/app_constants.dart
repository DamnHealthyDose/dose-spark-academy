class AppConstants {
  AppConstants._();

  static const String appName = 'DOSE Academy';
  static const String appVersion = '1.0.0';

  // Supabase (populated from environment)
  static const String supabaseUrl = String.fromEnvironment(
    'SUPABASE_URL',
    defaultValue: 'https://bynjpfglswtneqjaczgq.supabase.co',
  );
  static const String supabaseAnonKey = String.fromEnvironment(
    'SUPABASE_ANON_KEY',
    defaultValue: '',
  );

  // Feature names
  static const String sparkJunior = 'SPARK Junior';
  static const String waveJunior = 'WAVE Junior';
  static const String rsdJunior = 'RSD Junior';
  static const String squadSupport = 'Squad Support';
}
