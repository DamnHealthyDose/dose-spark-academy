import 'package:flutter/material.dart';
import 'package:dose_academy/core/constants/app_constants.dart';
import 'package:dose_academy/core/theme/app_theme.dart';
import 'package:dose_academy/core/routing/app_router.dart';

class DoseAcademyApp extends StatelessWidget {
  const DoseAcademyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: AppConstants.appName,
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      routerConfig: AppRouter.router,
    );
  }
}
