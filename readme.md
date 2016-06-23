aws-lambda-benchmark
====================
*Heavily in development. (Assume) Nothing works.*

A simple test harness to investigate the performance characteristics of  different inter-lambda integration patterns.

Available Execution Types
-------------------------

**Linear**

    Lambda 1 -> Lambda 2 -> ... -> Lambda n

Timer starts prior to Lambda 1.
Timer ends upon completion of Lambda n.

**Cascade** (to be implemented)

                                -> ...
                              /
                -> Lambda 1-1
              /               \
             /                  -> ...
    Lambda 1  
             \                  -> ...
              \               /
                -> Lambda 1-2
                              \
                                -> Lambda n-n-n

Timer starts prior to Lambda 1.
Timer ends upon completion of Lambda n-n-n.

Available Invocation Types
--------------------------
- Direct Invocation: invoke through Aws.Lambda()
- Http Invocation: invoke JSON over HTTP through AWS API Gateway (to be implemented)
- Kinesis Invocation: (to be implemented)
- SNS Invocation: (to be implemented)

Preliminary Results
-------------------

Concurrent request: 1
Runtime: Node4.3
Memory: 1024MB

|  Run | Execution | Invocation |  Depth  | Duration (in ms)  |
|------|-----------|------------|---------|-------------------|
| #1  | Linear | Direct | 5 | 608 ms |
| #2  | Linear | Direct | 5 | 410 ms |
| #3  | Linear | Direct | 1,000  | 78,926 ms |
| #4  | Linear | Direct | 1,000  | 135,294 ms |
| #5  | Linear | SNS | 5 | 761 ms |
| #6  | Linear | SNS | 5 | 700 ms |
| #7  | Linear | SNS | 5 | 729 ms |
| #8  | Linear | SNS | 1,000 | 164,541 ms |
| #9  | Linear | SNS | 1,000 | 345,414 ms |
| #10  | Linear | SNS | 1,000 | 170,153 ms |
