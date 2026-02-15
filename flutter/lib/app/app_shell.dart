import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:dose_academy/core/constants/app_colors.dart';
import 'package:dose_academy/shared/providers/navigation_provider.dart';

class AppShell extends StatelessWidget {
  final Widget child;

  const AppShell({super.key, required this.child});

  static const List<_NavItem> _navItems = [
    _NavItem(
      icon: Icons.auto_awesome,
      activeIcon: Icons.auto_awesome,
      label: 'SPARK',
      route: '/spark-junior',
      color: AppColors.sparkJunior,
    ),
    _NavItem(
      icon: Icons.waves_outlined,
      activeIcon: Icons.waves,
      label: 'WAVE',
      route: '/wave-junior',
      color: AppColors.waveJunior,
    ),
    _NavItem(
      icon: Icons.psychology_outlined,
      activeIcon: Icons.psychology,
      label: 'RSD',
      route: '/rsd-junior',
      color: AppColors.rsdJunior,
    ),
    _NavItem(
      icon: Icons.group_outlined,
      activeIcon: Icons.group,
      label: 'Squad',
      route: '/squad-support',
      color: AppColors.squadSupport,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Consumer<NavigationProvider>(
      builder: (context, navProvider, _) {
        return Scaffold(
          body: child,
          bottomNavigationBar: NavigationBar(
            selectedIndex: navProvider.currentIndex,
            onDestinationSelected: (index) {
              navProvider.setIndex(index);
              context.go(_navItems[index].route);
            },
            destinations: _navItems.map((item) {
              return NavigationDestination(
                icon: Icon(item.icon, color: AppColors.textSecondary),
                selectedIcon: Icon(item.activeIcon, color: item.color),
                label: item.label,
              );
            }).toList(),
          ),
        );
      },
    );
  }
}

class _NavItem {
  final IconData icon;
  final IconData activeIcon;
  final String label;
  final String route;
  final Color color;

  const _NavItem({
    required this.icon,
    required this.activeIcon,
    required this.label,
    required this.route,
    required this.color,
  });
}
