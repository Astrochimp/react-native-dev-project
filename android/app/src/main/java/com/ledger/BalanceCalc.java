package com.ledger;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;



public class BalanceCalc extends ReactContextBaseJavaModule {
  @Override
  public String getName() {
    return "BalanceCalc";
  }

  @ReactMethod
  public void calculateBalance(ReadableArray transactions, Callback callBack) {
    Double balanceTotal = 0.0;
    for (int i = 0; i < transactions.size(); i++) {
      ReadableMap tranJson = transactions.getMap(i);
      balanceTotal = balanceTotal + tranJson.getDouble("amount");
    }
    callBack.invoke(balanceTotal);
  }

  BalanceCalc(ReactApplicationContext context) {
    super(context);
  }
}
