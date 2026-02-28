```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the efficient, maintainable, and robust development of AI coding agents within the AGENTS repository. Adherence to these principles will promote a streamlined and reliable codebase.

## 1. DRY (Don't Repeat Yourself)

*   All code snippets, algorithms, and utility functions must be reusable. Avoid duplicating logic across multiple files.
*   When implementing a new feature, create a new file that encapsulates the core functionality and then delegate less common tasks to reusable components.
*   Favor composition over inheritance for creating complex agent behaviors.

## 2. KISS (Keep It Simple, Stupid)

*   Code should be easily understandable by other developers, including yourself in the future.
*   Prioritize clarity and conciseness.  Avoid unnecessary complexity.
*   Strive for straightforward logic over elaborate solutions.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module/function should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be extensible without modifying the existing code.  New functionality should be added through defined interfaces or API contracts.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to depend on methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.  They should be dependent on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the features that are currently needed. Avoid adding features until they are explicitly required.
*   Refactor code iteratively, adding features as the project progresses and requirements evolve.
*   Don’t introduce features that are unlikely to be used in the foreseeable future.

## 5. Code Style & Formatting

*   Follow the established coding style guidelines ([link to style guide here]).
*   Consistent indentation and line spacing are required.
*   Use meaningful variable and function names.
*   Document code thoroughly with comments explaining the purpose and logic.

## 6. File Size Limits

*   Each file must have a maximum of 180 lines of code.
*   Code should be well-formatted, commented, and clearly structured.

## 7. Testing

*   All development must be productive.
*   Tests must be written *before* code.
*   Tests should be independent and isolated.
*   Utilize unit testing framework ([link to framework]) for all core functionality.
*   Focus on test coverage.  Aim for at least 80% automated test coverage.
*   Employ a robust mocking strategy, ensuring isolated and repeatable tests.

## 8.  Documentation

*   Provide clear and concise documentation for all functions, classes, and modules.
*   Include usage examples and explanations in the documentation.

## 9.  Error Handling

*   Handle exceptions gracefully and provide informative error messages.
*   Log errors and warnings appropriately.
*   Implement retry mechanisms for transient errors.

## 10.  Repository & Structure

*   The AGENTS.md file should be organized logically, with clear sections for different types of code.
*   Use descriptive filenames for files.
*   Follow consistent naming conventions.

## 11.  Code Complexity

*   Favor algorithms over data structures.
*   Minimize loops and recursion.
*   Use appropriate data structures for efficient data processing.

## 12.  Future Considerations

*   Consider potential future requirements and design patterns.
*   Add modularity and reusability as the project evolves.

## 13.  Version Control

*   Use a version control system (e.g., Git) and follow established branching and merging practices.

## 14.  Code Review

*   All code must be reviewed by at least one other developer before merging.

## 15.  Testing Environment Setup

*   Ensure all testing environments are properly configured.
*   Automated testing framework configured for optimal performance.
```