import dagster as dg

@dg.asset (
    metadata = {
        "dagster/uri": dg.MetadataValue.url("test_data/foo")
    }
)
def asset_static_metadata():
    return {"id": 1}

@dg.asset
def asset_runtime_metadata():
    return dg.MaterializeResult(
        metadata = {
            "dagster/uri": dg.MetadataValue.url("test_data/foo")
        }
    )

defs = dg.Definitions(assets=[asset_static_metadata, asset_runtime_metadata])
