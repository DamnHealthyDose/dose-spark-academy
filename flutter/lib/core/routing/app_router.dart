import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:dose_academy/app/app_shell.dart';
import 'package:dose_academy/features/spark_junior/screens/spark_junior_screen.dart';
import 'package:dose_academy/features/wave_junior/screens/wave_junior_screen.dart';
import 'package:dose_academy/features/rsd_junior/screens/rsd_junior_screen.dart';
import 'package:dose_academy/features/squad_support/screens/squad_support_screen.dart';

class AppRouter {
  AppRouter._();

  static final GlobalKey<NavigatorState> _rootNavigatorKey =
      GlobalKey<NavigatorState>(debugLabel: 'root');

  static final GoRouter router = GoRouter(
    navigatorKey: _rootNavigatorKey,
    initialLocation: '/spark-junior',
    routes: [
      ShellRoute(
        builder: (context, state, child) => AppShell(child: child),
        routes: [
          GoRoute(
            path: '/spark-junior',
            name: 'spark-junior',
            pageBuilder: (context, state) => const NoTransitionPage(
              child: SparkJuniorScreen(),
            ),
          ),
          GoRoute(
            path: '/wave-junior',
            name: 'wave-junior',
            pageBuilder: (context, state) => const NoTransitionPage(
              child: WaveJuniorScreen(),
            ),
          ),
          GoRoute(
            path: '/rsd-junior',
            name: 'rsd-junior',
            pageBuilder: (context, state) => const NoTransitionPage(
              child: RsdJuniorScreen(),
            ),
          ),
          GoRoute(
            path: '/squad-support',
            name: 'squad-support',
            pageBuilder: (context, state) => const NoTransitionPage(
              child: SquadSupportScreen(),
            ),
          ),
        ],
      ),
    ],
    errorBuilder: (context, state) => Scaffold(
      body: Center(
        child: Text('Page not found: ${state.uri}'),
      ),
    ),
  );
}
