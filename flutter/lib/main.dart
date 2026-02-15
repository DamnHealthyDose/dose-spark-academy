import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/app/app.dart';
import 'package:dose_academy/shared/providers/navigation_provider.dart';
import 'package:dose_academy/features/spark_junior/providers/spark_junior_provider.dart';
import 'package:dose_academy/features/wave_junior/providers/wave_junior_provider.dart';
import 'package:dose_academy/features/rsd_junior/providers/rsd_junior_provider.dart';
import 'package:dose_academy/features/squad_support/providers/squad_support_provider.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => NavigationProvider()),
        ChangeNotifierProvider(create: (_) => SparkJuniorProvider()),
        ChangeNotifierProvider(create: (_) => WaveJuniorProvider()),
        ChangeNotifierProvider(create: (_) => RsdJuniorProvider()),
        ChangeNotifierProvider(create: (_) => SquadSupportProvider()),
      ],
      child: const DoseAcademyApp(),
    ),
  );
}
