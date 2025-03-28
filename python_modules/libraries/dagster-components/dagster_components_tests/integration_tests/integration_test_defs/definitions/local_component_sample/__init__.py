from dagster._core.definitions.definitions_class import Definitions
from dagster_components import Component, ComponentLoadContext, ResolvableModel


class MyComponentModel(ResolvableModel):
    a_string: str
    an_int: int


class MyComponent(Component):
    a_string: str
    an_int: int

    def build_defs(self, context: ComponentLoadContext) -> Definitions:
        return Definitions()
