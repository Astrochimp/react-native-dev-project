import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { type Transaction } from "./types";

export const TransactionListItem = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <ListCard
      amount={transaction.amount}
      title={`#${transaction.id} ${transaction.type}`}
      type={transaction.type}
    /**
     * TODO: For wires,
     *       1. add subtitle="A fee may apply" under the title
     *       2. downsize the font by 2 points
     *       3. use font color "slategray"
     */
    /**
     * TODO: For deposits,
     *       1. add subtitle="A fee may apply" under the title
     *       2. keep the regular font size
     *       3. use font color "slategray"
     *
     *
     * Added logic for both TODO items above
     */
    />
  );
};

// Note: This component is intentionally separate from `TransactionListItem`.
// Avoid inlining this, regardless of how strong the temptation is!
const ListCard = ({ title, amount, type }: { title: string; amount: number; type: string; }) => {

  const amountFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount,
  );

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 2,
        backgroundColor: "#eee",
        marginHorizontal: 15,
        marginVertical: 2,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {amount > 0 ? (
        <>
          <View>
            <Text style={{ fontSize: 14, color: "navy" }}>{title}</Text>
            {type === 'wire' && (<Text style={{ fontSize: 12, color: "slategray" }}>A fee may apply</Text>)}
            {type === 'deposit' && (<Text style={{ fontSize: 14, color: "slategray" }}>A fee may apply</Text>)}
          </View>
          <Text style={{ color: "green", fontWeight: "400" }}>{amountFormat}</Text>
        </>
      ) : (
        <>
          <View>
            <Text style={{ fontSize: 14, color: "navy" }}>{title}</Text>
            {type === 'wire' && (<Text style={{ fontSize: 12, color: "slategray" }}>A fee may apply</Text>)}
          </View>
          <Text style={{ fontWeight: "200" }}>{amountFormat}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
