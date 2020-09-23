---
layout: default
title: JavaScript Notes week 3
---

## Javascript Notes 3

### `while` Loop
```javascript
while(condition){
    //do something
}
```
The program in `while` will be executed repeatedly when `condition == true`.

<br>

### `for` Loop
other than `while` loop, we can also use `for` loop in the program.
```javascript
for (exec1; exec2; exec3){
    // do something
}
```
For three `exec` in for loop, they will be executed in different time:
<div class="datatable-begin"></div>

Command|Runtime 
-------|---------
`exec1`|The line will be executed **before loop start**
`exec2`|The line will be a **condition** that determine whether the loop will go on
`exec3`|The line will be executed **everytime after loop is executed**

<div class="datatable-end"></div>

<br>

```javascript
for (i=0; i < 10; i ++){
    //do something
} 
```


<br>

### `do ... while` Loop
The program in `do ... while` loop will execute the code in `do` block while the condition in `while` is true.
```javascript
do{
    // do something
}
while(condition);
```

<br>

### `for of` Loop
