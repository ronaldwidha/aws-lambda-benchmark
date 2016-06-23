aws-lambda-benchmark
====================
*Heavily in development. (Assume) Nothing works.*

A simple test harness to investigate the performance characteristics of  different inter-lambda integration patterns.

Available Execution Types
-------------------------

*Linear*

Lambda 1 -> Lambda 2 -> ... -> Lambda n

Timer starts prior to Lambda 1.
Timer ends upon completion of Lambda n.

*Cascade*
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
- Http Invocation: invoke JSON over HTTP through AWS API Gateway (tbd)
- Kinesis Invocation: tbd
- SNS Invocation: tbd

Preliminary Results
-------------------
TBD
