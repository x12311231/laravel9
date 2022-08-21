<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    protected Test $test;

    public function __construct(Test $test)
    {
        $this->test = $test;
    }

    //
    public function testSleep(): string {
        sleep(3);
        return "sleep 3";
    }

    public function test(): string {
        return "1";
    }

    public function testQueryInsert(): bool
    {
        return DB::table('test')->insert(['name' => 'a']);
    }

    public function testModelInsert(): bool
    {
        $test = new Test();
        $test->name = 'a';
        return $test->save();
    }

    public function testModelInsert1(): bool
    {
        $this->test->name = 'a';
        return $this->test->save();
    }
}
