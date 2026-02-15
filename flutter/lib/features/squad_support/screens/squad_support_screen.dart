import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/core/constants/app_colors.dart';
import 'package:dose_academy/features/squad_support/providers/squad_support_provider.dart';

class SquadSupportScreen extends StatelessWidget {
  const SquadSupportScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<SquadSupportProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Squad Support'),
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
                      color: AppColors.squadSupport.withOpacity(0.1),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.group,
                      size: 64,
                      color: AppColors.squadSupport,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'Squad Support',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Community support, mentorship &\ncollaborative learning',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 32),
                  ElevatedButton(
                    onPressed: () {
                      // TODO: Navigate to Squad Support activities
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.squadSupport,
                    ),
                    child: const Text('Get Support'),
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
