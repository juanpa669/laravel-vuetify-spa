<?php

namespace App\Http\Controllers\Auth;

use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StoreAvatar extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function store(REquest $request)
    {

        dd($request);
        die();
        if ( $request->hasFile('file')){
            if ($request->file('file')->isValid()){
                $file = $request->file('file');
                $name = $file->getClientOriginalName();
                $file->move('images' , $name);
                $inputs = $request->all();
                $inputs['path'] = $name;
            }
        }
        User::update($inputs);
    }
}
