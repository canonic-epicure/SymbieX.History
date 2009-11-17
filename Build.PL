use inc::Module::JSAN::DSL;

name            SymbieX.History

version         0.01
author          'Nickolay (SamuraiJack) Platonov <root@symbie.org>'

abstract        'Extension for Symbie framework, enabling state tracking of the application via the hash part of the URL'
license         lgpl


requires        Joose                           3.01
requires        Symbie                          0.01
requires        JooseX.Namespace.Depended       0.01

test_requires   Test.Run                        0.01

docs_markup     mmd