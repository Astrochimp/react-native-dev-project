//
//  BalanceCalc.swift
//  Ledger
//
//  Created by Marcello Prattico on 5/23/23.
//

import Foundation
import React

@objc(BalanceCalc) class BalanceCalc: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func calculateBalance(
    _ transactions: [NSDictionary],
    callback: RCTResponseSenderBlock
  ) {
    var balanceTotal: Double = 0;
    
    struct LineItem:Decodable {
      let amount: Double
    }

    /*
       Plan here is to use the transaction array and iterate to get the amounts.
       Similar implementation works in Java/Android
     */
    
    if (transactions.count > 0) {
      for item in transactions {
        if let amount = item["amount"] as? Double {
          let entry = LineItem(amount: amount)
          balanceTotal = balanceTotal + amount
        }
      }
    }
    
    callback([balanceTotal])
  }
}
