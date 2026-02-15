import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/core/constants/app_colors.dart';
import 'package:dose_academy/features/rsd_junior/providers/rsd_junior_provider.dart';

class RsdJuniorScreen extends StatelessWidget {
  const RsdJuniorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<RsdJuniorProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('RSD Junior'),
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
                      color: AppColors.rsdJunior.withOpacity(0.1),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.psychology,
                      size: 64,
                      color: AppColors.rsdJunior,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'RSD Junior',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Rejection Sensitivity Dysphoria support\nfor young learners',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 32),
                  ElevatedButton(
                    onPressed: () {
                      // TODO: Navigate to RSD Junior activities
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.rsdJunior,
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
