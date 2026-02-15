import 'package:flutter/material.dart';

class NavigationProvider extends ChangeNotifier {
  int _currentIndex = 0;

  int get currentIndex => _currentIndex;

  void setIndex(int index) {
    if (_currentIndex != index) {
      _currentIndex = index;
      notifyListeners();
    }
  }

  String get currentLabel {
    switch (_currentIndex) {
      case 0:
        return 'SPARK Junior';
      case 1:
        return 'WAVE Junior';
      case 2:
        return 'RSD Junior';
      case 3:
        return 'Squad Support';
      default:
        return 'SPARK Junior';
    }
  }
}
