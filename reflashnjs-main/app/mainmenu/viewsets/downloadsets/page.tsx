"use client";
import { Container, Title, Table } from "@mantine/core";
import React from "react";
import { DummyData } from "../../../../component/DummyData";
export default function Viewsets() {
  const rows = DummyData.map((element) => (
    <tr key={element.SetName}>
      <td>{element.SetName}</td>
      <td>{element.SubjectName}</td>
      <td>
        {element.SetQuestion.map((innerQuestion) => (
          <>
            <td>{innerQuestion.Question}</td>
          </>
        ))}
      </td>
      <td>
        {element.SetQuestion.map((innerQuestion) => (
          <>
            <td>{innerQuestion.Answer}</td>
          </>
        ))}
      </td>
    </tr>
  ));
  return (
    <Container size={650} my={30}>
      <Title
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
          marginBottom: 50,
        })}
        align="center"
      >
        Reflash! View All Set
      </Title>

      <Table>
        <thead>
          <tr>
            <th>Set name</th>
            <th>Subject name</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}
