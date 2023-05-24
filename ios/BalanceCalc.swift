//
//  BalanceCalc.swift
//  Ledger
//
//  Created by Marcello Prattico on 5/23/23.
//

import Foundation

@objc(BalanceCalc) class BalanceCalc: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func calculateBalance(
    _ transactions: NSArray,
    callback: RCTResponseSenderBlock
  ) {
    var balanceTotal: Float = 0;
    
    struct LineItem:Decodable {
      let amount: String
    }

    /*
       Plan here is to use the transaction array and iterate to ge the amounts.
       Swift does not seem to allow for accessing an object defined as <Any>/NSDictionary key/value
     
      Similar implementation works in Java/Android
     */
    
    if (transactions.count > 0) {
      for item in transactions {
        print(item)
        // Issue here with not being able to access the object keys or values. NSDictionary is Any type and cannot cast as LineItem
        // balanceTotal = balanceTotal + item.amount
      }
    }


    print(balanceTotal)
    callback([balanceTotal])
  }
}
