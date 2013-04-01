present.ts
----------

What is typescript
------------------

- Typed superset of Javascript
- Class, Module and Interface definitions
- Not runtime
- A transpiler
> A source to source compiler... translating from one source language to another with approximately the same level of abstraction -- <cite>Wikipedia</cite>

Classes'
--------

`
Class Present
{

}

Dependencies
------------
- Typescript compiler supports CommonJS AMD and single build output with common import definition
- provided import is the top level file module, with named modules / classes appended / exported onto it

Idioms & Shortcuts
------------------

- Variable initalisation via constructor fields
- Unlike Dart there is no auto binding
- Privacy is not enforced by closures, only tooling
- The specification is not complete, so some things (import) may be subject to change
- There are bugs in the compiler (try ommiting the module type)
- God I miss types

