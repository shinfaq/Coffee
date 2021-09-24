<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\table;
use Illuminate\Http\Response;

class TableController extends Controller
{
    public function getAll()
    {
        return table::all();
    }
    public function createProductType(Request $request)
    {
        $table = new table();
        $table->name = $request->name;
        $table->save();
        return response()->json($table);
    }
    public function getTalbe($id)
    {
        $table = table::find($id);
        if ($table)
            return $table;
        return response()->json([
            'status' => 'error',
            'error' => 'Not found',
            'msg' => 'Please try again'
        ], Response::HTTP_NOT_FOUND);
    }
    public function updateTable(Request $request)
    {
        $table = table::find($request->id);
        if ($table) {
            if ($table->updated_at == $request->updated_at) {
                $table->update($request->all());
                return response()->json($table);
            }
            return response()->json([
                'status' => 'error',
                'msg' => 'Error at updated_at of product ' . $table->id
            ], Response::HTTP_BAD_REQUEST);
        }
        return response()->json([
            'status' => 'error',
            'error' => 'Not found',
            'msg' => 'Please try again'
        ], Response::HTTP_NOT_FOUND);
    }
    public function deleteTable($id)
    {
        $table = table::find($id);
        if ($table) {
            $table->delete();
            return response()->json([
                'status' => 'OK',
            ], Response::HTTP_OK);
        }
        return response()->json([
            'status' => 'error',
            'error' => 'Not found',
            'msg' => 'Please try again'
        ], Response::HTTP_NOT_FOUND);
    }
}