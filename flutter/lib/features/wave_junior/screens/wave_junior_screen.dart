import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/core/constants/app_colors.dart';
import 'package:dose_academy/features/wave_junior/providers/wave_junior_provider.dart';

class WaveJuniorScreen extends StatelessWidget {
  const WaveJuniorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<WaveJuniorProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('WAVE Junior'),
          ),
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: AppColors.waveJunior.withOpacity(0.1),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.waves,
                      size: 64,
                      color: AppColors.waveJunior,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'WAVE Junior',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Wellbeing, Achievement, Values & Engagement',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 32),
                  ElevatedButton(
                    onPressed: () {
                      // TODO: Navigate to WAVE Junior activities
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.waveJunior,
                    ),
                    child: const Text('Start Learning'),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
