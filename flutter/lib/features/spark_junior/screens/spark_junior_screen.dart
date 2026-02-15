import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/core/constants/app_colors.dart';
import 'package:dose_academy/features/spark_junior/providers/spark_junior_provider.dart';

class SparkJuniorScreen extends StatelessWidget {
  const SparkJuniorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<SparkJuniorProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('SPARK Junior'),
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
                      color: AppColors.sparkJunior.withOpacity(0.1),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.auto_awesome,
                      size: 64,
                      color: AppColors.sparkJunior,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'SPARK Junior',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Social skills, Problem-solving, Awareness,\nResilience & Kindness',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 32),
                  ElevatedButton(
                    onPressed: () {
                      // TODO: Navigate to SPARK Junior activities
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.sparkJunior,
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
