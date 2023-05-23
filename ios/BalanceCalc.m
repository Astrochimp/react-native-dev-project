//
//  BalanceCalc.m
//  Ledger
//
//  Created by Marcello Prattico on 5/23/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BalanceCalc, NSObject)
  RCT_EXTERN_METHOD(calculateBalance:
    (NSArray*) transactions
    callback: (RCTResponseSenderBlock)callback
  )
@end
