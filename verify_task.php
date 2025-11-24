<?php

require __DIR__ . '/vendor/autoload.php';

use App\Models\Task;

try {
    if (class_exists(Task::class)) {
        echo "Task class exists.\n";
        $task = new Task();
        echo "Task instance created successfully.\n";
    } else {
        echo "Task class does not exist.\n";
    }
} catch (\Throwable $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
